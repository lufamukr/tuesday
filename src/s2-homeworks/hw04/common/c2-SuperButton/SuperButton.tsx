import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = s.button
    + (disabled
        ? ' ' + s.disabled  // Якщо кнопка disabled, додаємо відповідний клас
        : xType === 'red'
          ? ' ' + s.red  // Якщо xType рівне 'red', додається клас для червоної кнопки
          : xType === 'secondary'
            ? ' ' + s.secondary  // Якщо xType рівне 'transparent', додається прозора кнопка
            : ' ' + s.default  // В іншому випадку додаємо синю кнопку
    )
    + (className ? ' ' + className : '');  // Якщо є додатковий className, додаємо його

    console.log(finalClassName)

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
