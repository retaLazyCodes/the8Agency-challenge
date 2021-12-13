import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { createAttendee } from 'store/reducers/attendeesReducer';
import './styles.css'

export const Form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()

    const onSubmit = () => {

        const form = document.getElementById("event-form")
        const transactionFormData = new FormData(form)
        const transactionObj = convertFormDataToTransactionObj(transactionFormData)
        dispatch(createAttendee(transactionObj))
    };

    const convertFormDataToTransactionObj = (transactionFormData) => {
        const name = transactionFormData.get('name')
        const lastname = transactionFormData.get('lastname')
        const email = transactionFormData.get('email')
        const country = transactionFormData.get('country')
        const phone = transactionFormData.get('phone')
        const position = transactionFormData.get('position')
        return {
            "name": name,
            "lastname": lastname,
            "email": email,
            "country": country,
            "phone": phone,
            "job": position
        }
    }


    return (
        <div className='form-container'>
            <h4 className='cta'>¡Inscríbete y reserva tu lugar ahora!</h4>

            <form className='form' id="event-form" onSubmit={handleSubmit(onSubmit)}>
                <label className='form__label' htmlFor='name'>
                    Nombre
                    <input className='form__input' type='text' name='name'
                        {...register('name', {
                            required: {
                                value: true,
                                message: 'Nombre es requerido'
                            },
                            minLength: {
                                value: 2,
                                message: 'Mínimo 2 carácteres'
                            }
                        })}
                    />
                    <span className='form__error'>
                        {errors.name && errors.name.message}
                    </span>
                </label>

                <label className='form__label' htmlFor='lastname'>
                    Apellido
                    <input className='form__input' type='text' name='lastname'
                        {...register('lastname', {
                            required: {
                                value: true,
                                message: 'Apellido es requerido'
                            },
                            minLength: {
                                value: 2,
                                message: 'Mínimo 2 carácteres'
                            }
                        })}
                    />
                    <span className='form__error'>
                        {errors.lastname && errors.lastname.message}
                    </span>
                </label>

                <label className='form__label' htmlFor='email'>
                    Correo electrónico del trabajo
                    <input className='form__input' type='text' name='email'
                        {...register('email', {
                            required: {
                                value: true,
                                message: 'Email es requerido'
                            },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "El email no es válido"
                            }
                        })}
                    />
                    <span className='form__error'>
                        {errors.email && errors.email.message}
                    </span>
                </label>

                <label className='form__label'>
                    País
                    <select
                        className={!errors.country?.message ? 'form__select' : 'form__select form__select--unselected'}
                        name='country'
                        {...register('country', {
                            required: {
                                value: true,
                                message: 'País es requerido'
                            }
                        })}
                    >
                        <option className='select-option--default' value=''>
                            Seleccione país
                        </option>
                        <option className='select-option' value='argentina'>
                            Argentina
                        </option>
                        <option className='select-option' value='uruguay'>
                            Uruguay
                        </option>
                        <option className='select-option' value='bolivia'>
                            Bolivia
                        </option>
                        <option className='select-option' value='brazil'>
                            Brasil
                        </option>
                        <option className='select-option' value='chile'>
                            Chile
                        </option>
                        <option className='select-option' value='ecuador'>
                            Ecuador
                        </option>
                        <option className='select-option' value='venezuela'>
                            Venezuela
                        </option>

                    </select>
                    <span className='form__error'>
                        {errors.country && errors.country.message}
                    </span>
                </label>

                <label className='form__label' htmlFor='phone'>
                    Número de teléfono
                    <input className='form__input' type='text' name='phone'
                        {...register('phone', {
                            required: {
                                value: true,
                                message: 'Teléfono es requerido'
                            },
                            pattern: {
                                value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                                message: "El número de teléfono no es válido"
                            }
                        })}
                    />
                    <span className='form__error'>
                        {errors.phone && errors.phone.message}
                    </span>
                </label>

                <label className='form__label' htmlFor='position'>
                    Puesto de trabajo
                    <input className='form__input' type='text' name='position'
                        {...register('position', {
                            required: {
                                value: true,
                                message: 'Puesto de trabajo es requerido'
                            },
                            minLength: {
                                value: 2,
                                message: 'Mínimo 2 carácteres'
                            }
                        })}
                    />
                    <span className='form__error'>
                        {errors.position && errors.position.message}
                    </span>
                </label>

                <button className='form__button' type='submit'>
                    Inscríbete
                </button>
            </form>
        </div>
    );
};