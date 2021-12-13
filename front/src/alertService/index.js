import Swal from 'sweetalert2';

// Common configs
const alerts = Swal.mixin({
    confirmButtonColor: '#18A0FB',
    cancelButtonColor: '#db5752'
});

const notifications = Swal.mixin({
    toast: true,
    padding: '0.5rem',
    position: 'top-end',
    showConfirmButton: false,
    width: '30%'
});

// Success alert
// Alert.success(titulo, texto, OPCIONAL texto_boton_confirmacion (DEFAULT: OK))
const success = (title, text, confirmButtonText = 'OK') => {
    alerts.fire({
        title,
        text,
        icon: 'success',
        confirmButtonText
    });
}

// Error alert
// Alert.error(titulo, texto, OPCIONAL texto_boton_confirmacion (DEFAULT: Volver))
const error = (title, text, confirmButtonText = 'Volver') => {
    alerts.fire({
        title,
        text,
        icon: 'error',
        confirmButtonText
    });
}

// Notificacion temporal
// Alert.tempNotify(titulo, OPCIONAL icono_error? (DEFAULT: false))
const tempNotify = (title, error = false) => {
    notifications.fire({
        title,
        icon: error ? 'error' : 'success',
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
}


export const Alert = {
    success,
    error,
    tempNotify
}
