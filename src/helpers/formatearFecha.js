import dayjs from 'dayjs'
import { es } from 'dayjs/locale/es'

export const formatearFecha = (fecha) => dayjs(fecha).locale('es').format('DD/MMMM/YYYY')
