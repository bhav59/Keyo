// prisma.config.mjs

const databaseUrl = process.env.DATABASE_URL
const directUrl   = process.env.DIRECT_URL

if (!databaseUrl) throw new Error('Missing DATABASE_URL')
if (!directUrl)   throw new Error('Missing DIRECT_URL')

module.exports = {
  datasources: {
    db: { url: databaseUrl, directUrl },
  },
}
