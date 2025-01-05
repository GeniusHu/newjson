module.exports = {
  async redirects() {
    return [
      {
        source: '/json-beautifier',
        destination: '/formatter',
        permanent: true, // 返回 308 状态码
      },
      {
        source: '/json-formatter',
        destination: '/formatter',
        permanent: true,
      },
      {
        source: '/json-validator',
        destination: '/validator',
        permanent: true,
      },
      // 添加其他需要重定向的路径
    ]
  },
} 