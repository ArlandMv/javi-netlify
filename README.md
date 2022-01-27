# Netlify Development

[![Netlify Status](https://api.netlify.com/api/v1/badges/ff4f431e-864c-44d8-b1fb-f0ec6ddc85ed/deploy-status)](https://app.netlify.com/sites/javiera-nachtigall-musalem/deploys)

This is a proyect showcasing the netlify plataform

## Deployment

There are 3 ways to deploy a proyect
1- MANUALY: drag and drop on netlify web page
2- GIT CD: conect to github/gitlab
3- CLI:

```bash
  npm i netlify-cli -g
```

## Deployment strategies

There are mainly 3 ways to deploy on netlify:

- MANUALY: drag and drop on netlify web page
- GIT CD: conect to github/gitlab
- NETLIFY-CLI: npm package

### Development

```bash
npm i netlify-cli -g
netlify init
netlify dev
```

### Deployment to Staging

```bash
netlify deploy
```

### Deployment to Production

```bash
netlify deploy --prod
```

## License

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Authors

- [@arlandmv](https://www.github.com/arlandmv)
