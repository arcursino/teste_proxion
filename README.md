## Teste

- O protótipo da Aplicação pode ser vista no [Figma](https://www.figma.com/proto/GqGLZB7WgqhN6RJjCRNyA2/Proxion?node-id=0%3A3&scaling=min-zoom/)

- [x] Login e autenticação via REST
- [ ] Cadastro e Lista de Material
- [ ] Cadastro e Lista de Categoria
- [ ] Cadastro e Lista de Saldo

Passos:

``` bash
docker build -t proxion . #build do projeto
docker run -it --rm -v $(pwd):/app -w /app/frontend -e NODE_ENV=development proxion npm install #instala o nodemodules na pasta frontend
docker-compose -f docker/compose/pgnginx.yaml up #sobe o docker do servidor nginx
``` 
Em outro terminal:
``` bash
docker-compose -f docker/compose/dev.yaml up  #sobe o projeto (back-end/frontend e banco)
```

Em outro terminal:
``` bash
docker exec -it proxion bash  #abri o bash dentro do docker
./manage.py migrate  # cria o banco de dados
./manage.py createsuperuser  # cria um usuário para fazer o login
```

Para acessar a página de login:
- No navegador digitar - localhost/login
