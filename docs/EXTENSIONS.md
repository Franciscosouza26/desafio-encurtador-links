# Extensões

Este documento reúne requisitos opcionais que podem ser usados como entregas progressivas ou diferenciais de avaliação.

## Índice

* [R1. Dockerização](#r1-dockerizacao)
* [R2. Testes automatizados](#r2-testes-automatizados)
* [R3. Autenticação](#r3-autenticacao)
* [R4. QR Code](#r4-qr-code)
* [R5. Expiração de links](#r5-expiracao-de-links)
* [R6. Estatísticas](#r6-estatisticas)

## R1. Containerização

Deve ser possível rodar a aplicação em contêineres Docker, com um único comando, preferencialmente com `docker compose up`. Pode-se usar imagens oficiais do Docker Hub para rodar o backend, o frontend e o banco de dados, se houver.

Opcionalmente, pode-se criar uma imagem customizada para o backend e outra para o frontend, caso seja necessário instalar dependências ou configurar o ambiente, além de fornecer a versão otimizada/compilada das aplicações.

## R2. Testes automatizados

O backend deve ter testes automatizados que verifiquem o comportamento da API, incluindo casos de sucesso e falha.

Preferencialmente, os casos testados devem cobrir a criação de links curtos, o acesso ao link original, a contagem de acessos e a persistência de dados.

## R3. Autenticação

Como usuário, quero que o sistema possa diferenciar acesso por perfil ou identidade, se isso fizer parte da proposta da solução.

## R4. QR Code

Ao gerar um link curto, frontend deve fornecer um QR Code que permita acessar o link gerado.

## R5. Expiração de links

Cada link curto deve ter uma data de expiração, após a qual o link não deve mais funcionar. Slugs expirados podem ser reutilizados para novos links curtos.

## R6. Estatísticas

O sistema deve fornecer uma página com os 10 links mais acessados, com a quantidade total de acessos.

## R7. Usuários

O sistema deve permitir que usuários se cadastrem e façam login para gerenciar seus próprios links curtos. Cada usuário deve ter controle apenas dos links que ele gerou.