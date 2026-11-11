# ACT Mauriti — primeira versão do aplicativo

Este pacote contém a primeira estrutura visual do PWA da Associação Cultural Thyago Mauriti.

## O que já está nesta versão
- Layout responsivo para celular e computador.
- Menu com as áreas Início, A associação, Associe-se, Ações culturais, Projetos e Contato.
- Identidade visual institucional provisória em verde, dourado e tons claros.
- Formulário de interesse em associação.
- Manifesto e service worker para instalação como PWA.
- Estrutura SQL para receber inscrições usando Supabase.

## Importante
O formulário ainda está em modo de demonstração até a conexão com um projeto Supabase. Não publique como formulário funcional antes de configurar o banco e testar o envio. Não solicite CPF ou documentos nesta primeira etapa.

## Publicação gratuita (próxima etapa)
1. Criar uma conta no Supabase e um projeto.
2. Executar `supabase.sql` no SQL Editor.
3. Copiar a URL do projeto e a chave pública (anon/publishable) para `app.js`.
4. Publicar os arquivos em uma hospedagem estática com HTTPS, como GitHub Pages.
5. Testar a instalação em Android e iPhone.

## Próximas melhorias planejadas
- Área administrativa protegida por login.
- Cadastro e edição de notícias, projetos e eventos.
- Upload e organização de fotografias.
- Gestão segura das inscrições.
- Política de privacidade e termos da associação.
- Substituir textos, links e identidade provisórios pelos dados oficiais.

## Personalização pendente
- Logomarca oficial em boa resolução.
- Instagram e WhatsApp oficiais.
- Texto institucional aprovado pela diretoria.
- Fotografias autorizadas para divulgação.
