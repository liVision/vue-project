const { post, get } = require('../server/server')

export const captchaSent = (params) => post(`captcha/sent`, params)