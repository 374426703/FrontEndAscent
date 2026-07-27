import request from '@/utils/request.js'

export const articleCategoryListService = () => {
    return request({
        url: '/category',
        method: 'GET'
    })
}
