const fs = require('fs');
const path = require('path');

// 1. Lista exata dos arquivos e pastas do template mais recente
const pathsToRemove = [
  'app/(tabs)',         // Remove a pasta de abas e tudo dentro dela
  'app/_layout.tsx',    // Layout original em TypeScript
  'app/modal.tsx',      // Modal de exemplo
  'app/+not-found.tsx', // Página de erro 404
  'app/+html.tsx',      // Configuração Web
  'assets/images',      // Imagens de exemplo
  'components',         // Componentes padrão
  'constants',          // Constantes de cores/temas
  'hooks',              // Hooks personalizados
  'scripts',            // Scripts internos do template
  'expo-env.d.ts',      // Definições de tipo do Expo
  'tsconfig.json'       // Configuração do TypeScript
];

console.log('🧹 Iniciando limpeza do template Expo...');

// 2. Executa a remoção recursiva
pathsToRemove.forEach(p => {
  const fullPath = path.join(__dirname, p);
  if (fs.existsSync(fullPath)) {
    fs.rmSync(fullPath, { recursive: true, force: true });
    console.log(`✅ Removido: ${p}`);
  }
});

// 3. Garante que a pasta 'app' existe e cria os arquivos .jsx
const appDir = path.join(__dirname, 'app');
if (!fs.existsSync(appDir)) fs.mkdirSync(appDir);

// Layout básico para navegação Stack
const layoutContent = `import { Stack } from 'expo-router';

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}`;

// Página inicial básica
const indexContent = `import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SENAI / MOBILE</Text>
      <Text>Projeto limpo - iniciado com sucesso!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#008542' }
});`;

// 4. Escreve os novos arquivos na pasta app
fs.writeFileSync(path.join(appDir, '_layout.jsx'), layoutContent);
fs.writeFileSync(path.join(appDir, 'index.jsx'), indexContent);

console.log('🚀 Projeto limpo e configurado para JSX!');