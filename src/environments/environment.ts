const backendUrl = `http://139.177.183.159:3000/api`;
const urlsocket = `http://139.177.183.159:3000`;

/**
 * Frontend Url.
 */
const frontendUrl = {
  host: 'localhost:4200',
  protocol: 'http',
};

/**
 * Tenant Mode
 * multi: Allow new users to create new tenants.
 * multi-with-subdomain: Same as multi, but enable access to the tenant via subdomain.
 * single: One tenant, the first user to register will be the admin.
 */
const tenantMode = 'single';

/**
 * Plan payments configuration.
 */
const isPlanEnabled = false;
const stripePublishableKey = '';

export const environment = {
  production: false,
  frontendUrl,
  backendUrl,
  tenantMode,
  isPlanEnabled,
  stripePublishableKey,
  urlsocket,
};
