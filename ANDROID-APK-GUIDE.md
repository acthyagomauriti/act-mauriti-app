# Como gerar o APK Android da ACT Mauriti

Este pacote está preparado para gerar um APK de teste usando GitHub Actions, sem instalar Android Studio no computador.

## Passos
1. Crie uma conta gratuita em https://github.com/ e um repositório novo chamado `act-mauriti-app`.
2. Envie todos os arquivos e pastas deste projeto para o repositório (incluindo `.github/workflows`).
3. No GitHub, abra a aba **Actions** e habilite os workflows, se solicitado.
4. Selecione **Build Android APK** e clique em **Run workflow**.
5. Aguarde a execução terminar. Abra a execução concluída e baixe o artefato **ACT-Mauriti-debug-APK**.
6. Extraia o ZIP baixado. O arquivo `app-debug.apk` poderá ser instalado em aparelhos Android para testes.

## Atenção antes de distribuir
- Este é um APK de depuração, adequado para testes. Para distribuição ampla ou publicação na Google Play, será necessário gerar um APK/AAB de release, assinado com uma chave privada protegida.
- O formulário de associação ainda não recebe inscrições até configurar o Supabase conforme `supabase.sql` e preencher as credenciais em `app.js`.
- Os links oficiais de Instagram e WhatsApp ainda precisam ser configurados.
- O aplicativo ainda precisa de política de privacidade, revisão dos textos institucionais e teste em aparelhos reais.
- Não compartilhe a chave privada de assinatura nem credenciais administrativas.
