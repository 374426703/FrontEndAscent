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

//文章分类修改
export const articleCategoryUpdateService = (categoryData)=>{
   return  request.put('/category',categoryData)
}

//删除分类
export const articleCategoryDeleteService = (id) => {
    return request.delete('/category?id='+id)
}

//文章列表查询
export const articleListService = (params) => {
    return request.get('/article', { params: params })
}

//添加文章
export const articleAddService = (articleModel)=>{
    return request.post('/article',articleModel)
}

//修改文章
export const articleUpdateService = (articleModel)=>{
    return request.post('/article/update',articleModel)
}

//删除文章
export const articleDeleteService = (articleId)=>{
    return request.get('/article/delete' + '?articleId=' + articleId)
}