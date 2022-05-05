import { notification } from 'antd';

export const notifications = {
    success: (message = '', description = '') => {
        return notification.success({
            message: message,
            description: description
        })
    },
    error: (message = '', description = '') => {
        return notification.error({
            message: message,
            description: description
        })
    }
}