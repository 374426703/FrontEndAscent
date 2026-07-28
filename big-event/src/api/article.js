import request from '@/utils/request.js'

export const articleCategoryListService = () => {
    return request({
        url: '/category',
        method: 'GET'
    })
}

//添加文章分类
export const articleCategoryAddService = (categoryModel) => {
    return request.post('/category', categoryModel)
}
