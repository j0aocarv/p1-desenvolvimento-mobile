// src/screens/SplashScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// Define o tipo de navegação do stack
type RootStackParamList = {
  SplashScreen: undefined;
  WeatherSearch: undefined;
};

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SplashScreen'>;

export default function SplashScreen() {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Indicador de página (três círculos) */}
        <View style={styles.pageIndicator}>
          <View style={[styles.dot, styles.activeDot]} /> {/* Círculo ativo */}
          <View style={styles.dot} /> {/* Círculo inativo */}
          <View style={styles.dot} /> {/* Círculo inativo */}
        </View>

        {/* Texto principal com toda a frase em negrito e itálico */}
        <Text style={styles.title}>
          <Text style={styles.boldItalicText}>Veja como está o tempo ao redor do mundo 🌍</Text>
        </Text>
        <Text style={styles.subtitle}>Comece agora gratuitamente</Text>

        {/* Botão de navegação */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('WeatherSearch')}
        >
          <Text style={styles.buttonText}>Vamos lá</Text>
        </TouchableOpacity>

        {/* Link de login */}
        <Text style={styles.loginText}>
          Já tem uma conta? <Text style={styles.loginLink}>Log in</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6151C3', // Cor de fundo da tela
    justifyContent: 'center',    // Centraliza o conteúdo verticalmente
    alignItems: 'center',        // Centraliza o conteúdo horizontalmente
  },
  card: {
    backgroundColor: '#FFF',      // Cor de fundo do cartão
    padding: 20,                  // Espaçamento interno do cartão
    borderRadius: 30,             // Bordas arredondadas do cartão
    alignItems: 'center',         // Centraliza os itens no cartão
    width: 350,                   // Largura do cartão
    height: 361,                  // Altura do cartão
  },
  pageIndicator: {
    flexDirection: 'row',         // Exibe os círculos lado a lado
    marginBottom: 15,             // Espaço abaixo do indicador de página
  },
  dot: {
    width: 8,                     // Largura dos círculos
    height: 8,                    // Altura dos círculos
    borderRadius: 4,              // Bordas arredondadas dos círculos (tornando-os redondos)
    backgroundColor: '#E0E0E0',   // Cor dos círculos inativos
    marginHorizontal: 4,          // Espaço horizontal entre os círculos
  },
  activeDot: {
    backgroundColor: '#6C63FF',   // Cor do círculo ativo
  },
  title: {
    fontSize: 20,                 // Tamanho da fonte do título
    textAlign: 'center',          // Centraliza o texto
    color: '#333',                // Cor do texto
    marginBottom: 10,             // Espaço abaixo do título
  },
  boldItalicText: {
    fontWeight: 'bold',           // Estilo para negrito
    fontStyle: 'italic',          // Estilo para itálico
  },
  subtitle: {
    fontSize: 14,                 // Tamanho da fonte do subtítulo
    color: '#888',                // Cor do subtítulo
    marginBottom: 20,             // Espaço abaixo do subtítulo
  },
  button: {
    backgroundColor: '#6151C3',   // Cor de fundo do botão
    paddingVertical: 20,          // Espaçamento vertical interno do botão
    paddingHorizontal: 20,        // Espaçamento horizontal interno do botão
    borderRadius: 25,             // Bordas arredondadas do botão
    marginBottom: 15,             // Espaço abaixo do botão
    width: 264,                   // Largura do botão
    height: 60,                   // Altura do botão
    alignItems: 'center',         // Centraliza o texto do botão
    marginTop: 20,                // Espaço acima do botão
  },
  buttonText: {
    color: '#FFF',                // Cor do texto do botão
    fontWeight: '600',            // Peso da fonte do texto do botão
    fontSize: 16,                 // Tamanho da fonte do texto do botão
    textAlign: 'center',          // Centraliza o texto no botão
  },
  loginText: {
    fontSize: 12,                 // Tamanho da fonte do texto de login
    color: '#888',                // Cor do texto de login
    marginTop: 20,                // Espaço acima do texto de login
  },
  loginLink: {
    color: '#6151C3',             // Cor do link de login
    fontWeight: 'bold',           // Negrito para o link de login
  },
});

