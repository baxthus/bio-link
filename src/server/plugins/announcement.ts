export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:response', (response) => {
        if (response.headers) {
            response.headers['x-powered-by'] = 'Nerd Rage';
        }
    });
});
