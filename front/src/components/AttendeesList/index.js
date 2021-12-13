import MaterialTable from 'material-table'
import { useSelector } from 'react-redux';

export const AttendeesList = () => {
    const attendees = useSelector(state => state.results)

    //configuración de columnas de material-table
    const columns = [
        { title: "Nombre", field: "name" },
        { title: "Apellido", field: "lastname" },
        { title: 'Correo electrónico', field: 'email' },
        { title: 'País', field: 'country' },
        { title: 'Teléfono', field: 'phone' },
        { title: 'Puesto de trabajo', field: 'job' },
    ];

    // objeto para configurar el idioma de los mensajes por defecto en material-table
    const localization = {
        body: {
            emptyDataSourceMessage: "No se han encontrado asistentes",
        },
        toolbar: { searchPlaceholder: "Buscar" },
    };

    return (
        <div style={{ maxWidth: '90vw', overflow: 'auto' }}>
            <div>
                <MaterialTable
                    title="Lista de Asistentes"
                    columns={columns}
                    data={attendees}
                    localization={localization}
                />
            </div>
        </div>
    )

}