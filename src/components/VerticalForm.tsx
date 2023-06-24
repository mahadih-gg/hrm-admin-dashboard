import React from "react";
import { useForm, Resolver, SubmitHandler, FieldValues, UnpackNestedValue } from "react-hook-form";
import { DeepPartial } from "utility-types";

interface VerticalFromProps<TFormValues extends FieldValues> {
    defaultValues?: TFormValues;
    resolver?: Resolver<TFormValues>;
    children?: any;
    onSubmit: SubmitHandler<TFormValues>;
    formClass?: string;
}

const VerticalForm = <TFormValues extends FieldValues>({
    defaultValues,
    resolver,
    children,
    onSubmit,
    formClass,
}: VerticalFromProps<TFormValues>) => {
    /*
     * form methods
     */
    const methods = useForm<TFormValues>({ defaultValues: defaultValues as UnpackNestedValue<DeepPartial<TFormValues>> | undefined, resolver });
    const {
      handleSubmit,
      register,
      control,
      formState: { errors },
    } = methods;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={formClass} noValidate>
            {Array.isArray(children)
                ? children.map((child) => {
                    return child.props && child.props.name
                        ? React.createElement(child.type, {
                            ...{
                                ...child.props,
                                register,
                                key: child.props.name,
                                errors,
                                control,
                            },
                        })
                        : child;
                })
                : children}
        </form>
    );
};

export default VerticalForm;