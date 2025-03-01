// app/layout.js
import './globals.css';

export const metadata = {
  title: 'ConTouch - Sua Contabilidade à um Toque',
  description: 'Serviços de contabilidade digital e assessoria contábil para empresas e empreendedores',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
