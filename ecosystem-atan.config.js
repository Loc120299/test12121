module.exports = {
  apps: [
    {
      name: 'dynamics_web_atan_5531-new',
      port: 5531,
      exec_mode: 'cluster',
      watch: true,
      script: 'npm',
      instances: 1,
      cwd: __dirname,
      args: 'run start:dynamics_web_atan_5531'
    }
  ],
  deploy: {

  }
}
