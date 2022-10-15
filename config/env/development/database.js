module.exports =  ({ env }) => ({
	connection: {
		client: env("DATABASE_CLIENT", "postgres"),
		connection: {
		host: env('DATABASE_HOST', 'strapi-dockerDB'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'strapi'),
			user: env('DATABASE_USERNAME', 'strapi'),
			password: env('DATABASE_PASSWORD', '1q2w3e4r5t'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});