import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.raw(
    `
    CREATE TABLE IF NOT EXISTS admin(
    id SERIAL PRIMARY KEY,
    login VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'admin'
    );
    `,
  );
}

export async function down(knex: Knex): Promise<void> {
  return knex.raw(
    `
            DROP TABLE IF EXISTS admin;
            `,
  );
}
