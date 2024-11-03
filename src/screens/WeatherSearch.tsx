import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const WeatherScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho da tela */}
      <View style={styles.header}>
        {/* Texto de boas-vindas e subtítulo */}
        <View>
          <Text style={styles.headerText}>Olá User,</Text>
          <Text style={styles.subHeaderText}>Descubra o clima</Text>
        </View>
        {/* Ícone de globo no cabeçalho */}
        <MaterialCommunityIcons name="earth" size={24} color="#080713" style={styles.icon} />
      </View>

      {/* Botão para pesquisar por uma cidade */}
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchButtonText}>Pesquise por uma cidade</Text>
      </TouchableOpacity>

      {/* Título da seção "Ao redor do mundo" */}
      <Text style={styles.sectionTitle}>Ao redor do mundo</Text>

      {/* Lista de previsões do tempo */}
      <ScrollView style={styles.weatherList} contentContainerStyle={{ alignItems: 'center' }}>
        {/* Cartões de previsão do tempo (exemplo com três cartões) */}
        {[...Array(3)].map((_, index) => (
          <View key={index} style={styles.weatherCard}>
            <View style={styles.cardContent}>
              {/* Informações sobre a localização */}
              <View style={styles.locationInfo}>
                <Text style={styles.countryText}>País</Text>
                <Text style={styles.cityText}>Cidade</Text>
                <Text style={styles.statusText}>Clear</Text>
              </View>
              {/* Temperatura no canto direito */}
              <Text style={styles.tempText}>x°C</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const { width } = Dimensions.get('window'); // Obtém a largura da tela para dimensionamento dos cartões

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16, // Espaçamento nas laterais da tela
    paddingTop: 40, // Espaçamento no topo da tela
  },
  header: {
    flexDirection: 'row', // Exibe o texto e o ícone lado a lado
    justifyContent: 'space-between', // Distribui o espaço entre os itens
    alignItems: 'center', // Alinha os itens verticalmente ao centro
    marginBottom: 61  , // Espaço abaixo do cabeçalho
  },
  headerText: {
    fontSize: 24, // Tamanho do texto do cabeçalho
    fontWeight: 'bold',
    color: '#333', // Cor do texto
  },
  subHeaderText: {
    fontSize: 18, // Tamanho do subtítulo
    color: '#555', // Cor do subtítulo
  },
  icon: {
    marginRight: 8, // Espaço à direita do ícone
  },
  searchButton: {
    backgroundColor: '#6151C3', // Cor de fundo do botão
    paddingVertical: 16, // Espaçamento vertical dentro do botão
    paddingHorizontal: 32, // Espaçamento horizontal dentro do botão
    borderRadius: 30, // Bordas arredondadas do botão
    alignItems: 'center', // Centraliza o texto do botão
    alignSelf: 'center', // Centraliza o botão no meio da tela
    marginBottom: 98, // Espaço abaixo do botão
  },
  searchButtonText: {
    color: '#fff', // Cor do texto do botão
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20, // Tamanho do título da seção
    fontWeight: 'bold',
    color: '#333', // Cor do título da seção
    marginBottom: 16, // Espaço abaixo do título
    alignSelf: 'flex-start', // Alinha o título à esquerda
    paddingHorizontal: 16, // Espaçamento horizontal do título
  },
  weatherList: {
    width: '100%', // Largura total da lista de previsão
  },
  weatherCard: {
    backgroundColor: '#6151C3', // Cor de fundo do cartão
    width: 338, // Ocupa 90% da largura da tela
    height: 144,
    paddingVertical: 20, // Espaçamento vertical dentro do cartão
    paddingHorizontal: 16, // Espaçamento horizontal dentro do cartão
    borderRadius: 30, // Bordas arredondadas do cartão
    marginBottom: 12, // Espaço abaixo de cada cartão
  },
  cardContent: {
    flexDirection: 'row', // Exibe a localização e a temperatura lado a lado
    justifyContent: 'space-between', // Distribui o espaço entre os itens
    alignItems: 'center', // Alinha os itens verticalmente ao centro
    width: '100%', // Largura total do conteúdo do cartão
  },
  locationInfo: {
    flexDirection: 'column', // Exibe as informações do país, cidade e status em uma coluna
  },
  countryText: {
    fontSize: 14, // Tamanho do texto do país
    color: '#fff', // Cor do texto do país
    marginBottom: 4, // Espaço abaixo do país
  },
  cityText: {
    fontSize: 20, // Tamanho do texto da cidade
    color: '#fff', // Cor do texto da cidade
    fontWeight: 'bold',
    marginBottom: 4, // Espaço abaixo do nome da cidade
  },
  statusText: {
    fontSize: 16, // Tamanho do texto de status (ex.: Clear)
    color: '#fff',
  },
  tempText: {
    fontSize: 24, // Tamanho do texto da temperatura
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default WeatherScreen;
