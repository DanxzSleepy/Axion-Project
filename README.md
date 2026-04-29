# AXION - Calisthenics Evolution Platform

AXION não é apenas um site de treinos. É uma plataforma de evolução completa para praticantes de calistenia, focada em progressão técnica, gamificação e visualização de progresso a longo prazo.

## 🚀 Visão do Produto

O AXION foi projetado para levar o usuário do nível iniciante ao avançado através de:
- **Aprendizado Estruturado**: Tutoriais detalhados com foco em técnica e progressão.
- **Gamificação**: Sistema de XP, níveis e Ranks (F até SS).
- **Skill Tree**: Uma árvore de habilidades interativa para desbloquear movimentos icônicos da calistenia.
- **Treinos Manuais e Inteligentes**: Guias manuais e, futuramente, suporte por IA.

## ✨ Funcionalidades Atuais

- **Home Gamificada**: Dashboard com progresso de XP, nível atual e status do usuário.
- **Skill Tree Interativa**: Quatro caminhos principais (Push, Pull, Core, Legs) com pré-requisitos reais.
- **Tutoriais de Exercícios**: Vídeos integrados do YouTube focados em técnica correta e regressões/progressões.
- **Sistema de Ranks**: Evolução baseada em XP, categorizando a dificuldade dos exercícios e o nível do atleta.
- **Perfil Personalizado**: Edição de avatar, bio, nickname e visualização de estatísticas.
- **Feedback & Suporte**: Canal direto para usuários reportarem bugs ou sugerirem melhorias.
- **Painel Administrativo (MVP)**: Área restrita para gestão de usuários, revisão de feedbacks e monitoramento da saúde do sistema.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Animações**: [Framer Motion](https://www.framer.com/motion/)
- **Backend/DB**: [Supabase](https://supabase.com/) (Auth, Database, Storage, RLS)
- **Componentes de UI**: [Lucide React](https://lucide.dev/) (Ícones), [Sonner](https://sonner.stevenly.io/) (Toasts)
- **Internacionalização**: Sistema customizado de contextos para Português/Inglês.

## ⚙️ Configuração Local

1.  **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/Axion-Project.git
    cd Axion-Project
    ```

2.  **Instale as dependências**:
    ```bash
    npm install
    ```

3.  **Configuração do Ambiente**:
    Crie um arquivo `.env.local` na raiz com suas credenciais do Supabase:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=seu_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anon
    ```

4.  **Banco de Dados**:
    Execute os scripts SQL localizados na pasta `/supabase` no seu console do Supabase para configurar as tabelas, RLS e roles administrativas.

5.  **Inicie o servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```

## 🛡️ Admin Access

Para acessar o painel administrativo em `/admin`, o usuário deve ter a role `admin` na tabela `profiles`. O acesso é protegido por middleware e verificações no lado do servidor/cliente.

---

Desenvolvido com foco na evolução constante. **Keep pushing.**
