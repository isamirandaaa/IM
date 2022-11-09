import * as React from 'react';
import { Text, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-web';



function IMHomeScreen() {
  return (
    <ScrollView>
    <View style={fundoo}>
      <Image style={foto} source={{ uri: 'https://rustans-thebeautysource.com/en/wp-content/uploads/2016/03/banner-versace.png',}}/>
      <View style={anuncio}>
        <Text style={slogan}>Nós fazemos a sua moda</Text>
        <Text style={textinho}> Últimas notícias sobre a marca: American Crime Story": 
        Penélope Cruz está no elenco de série sobre assassinato de Versace;
        Ícones dos anos 1990, Naomi Campbell e Kate Moss brilham em desfile para colaboração das grifes Fendi e Versace;</Text>
      </View>
      <Image style={fototeca} source={{ uri: 'https://claudia.abril.com.br/wp-content/uploads/2020/01/gettyimages-851634132-1.jpg',}}/>
      <Image style={fotuu} source={{ uri: 'https://escoladeestilo.com.br/wp-content/uploads/2020/10/voguept-linda-evangelista-moda-aniversario10.jpg',}}/>
      <Image style={fota} source={{ uri: 'https://i0.wp.com/www.hoymagazine.es/wp-content/uploads/2021/03/157820689_830298117557425_5559562577855723055_n-e1615232132215.jpg?fit=1080%2C723&ssl=1',}}/>
      <Image style={fotuu} source={{ uri: 'https://media.fashionnetwork.com/m/2a05/4964/e37b/419a/7fab/e546/a928/d507/dcd6/95d1/95d1.jpg',}}/>
    </View>
    </ScrollView>
  );
}

function IMHistóriaScreen() {
  return (
    <ScrollView>
    <View style={fundoo}>
      <Text >História da marca</Text>
      <View style={caixa}>Fundada em 1978 por Gianni Versace, a marca traz em suas criações a provocação visual sem esquecer o conforto dos materiais e a liberdade que a silhueta deve ter. A marca e símbolo de extravagância e sensualidade. A marca com quase quarenta anos de história, e conhecida por suas criações audaciosas, estampas chamativas coloridas, a modelagem justa e o contraste entre o preto e acessórios dourados são características da assinatura rock and roll da marca. Essa referência rocker tem se mantido como legado por Donatella Versace desde que assumiu a direção criativa em 1997, depois do assassinato do seu irmão. Vestidos com recortes geométricos e detalhes sedutores como maxi estampas são trazidos por essa referência. O estilista Gianni Versace nasceu dia 2 de dezembro de 1946 em uma cidade pobre da Itália, Reggio Calábria. Sua mãe dirigia um ateliê de costura onde ele trabalhou e aprendeu com ela por um tempo, desenhando e costurando roupas para ajuda-la.Aos 25 anos, em 1972, Gianni recebeu uma encomenda de uma um dono de uma confecção e deveria criar uma coleção que seria produzida em Milão. 
      </View>
      <View style={caixa}>Em 1978, ainda trabalhando na Complice, o estilista resolveu fundar a Versace Company em parceria com seu irmão Santo, o diretor geral e sua irmã, Donatella, responsável pelas campanhas publicitárias. No mesmo ano, lançou sua primeira coleção feminina, intitulada de Gianni Versace Donna, em uma galeria de arte em Milão. No mesmo ano, lançou uma coleção masculina, na Via della Spiga, sua loja, um dos endereços mais renomados de Milão. Mesmo nao gostando de Milão por achar que a elite preferia  Armani, enquanto os emergentes que usavam sua moda. Gianni chegou a dizer o estilista Giorgio Armani vestia as esposas, enquanto a Versace vestia as amantes. Mesmo com declarações polêmicas, logo se tornou um dos preferidos, por seu estilo inconfundível. Ele vestia mulheres sexys e poderosas, seus cortes eram marcantes e seu dom de alfaiate era excepcional. Cores vibrantes e tecidos brilhantes, uso de tecidos fluidos como a seda com couro, bordados e estampas com metais e plásticos  o ajudaram no reconhecimento internacional.
      </View>
    </View>
    </ScrollView>
  );
}

function IMProdutosScreen() {
  return (
    <ScrollView>
    <View style={fundo}>
      <Text style={descrição}>Medusa Biggie Hoodie Dress - $3,225</Text><Image style={produtos} source={{ uri: 'https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw05664ccc/original/90_1009018-1A00572_1B000_10_MedusaBiggieHoodieMidiDress-Dresses-versace-online-store_0_0.jpg?sw=1440&sh=2000&sm=fit&sfrm=jpg',}}/>
      <Text style={descrição}>Saia com pregas e estampa Medusa Renaissance - R$ 16.804</Text>s<Image style={produtos} source={{ uri: 'https://cdn-images.farfetch-contents.com/16/85/35/66/16853566_9c8dc843-0a6c-4163-926c-1fa519d6401f_1000.jpg',}}/>
      <Text style={descrição}>Bolsa La Meduza - R$ 8.259,00.</Text>s<Image style={produtos} source={{ uri: 'https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw22dbeb19/original/90_DBFI040-1A02212_1LB9V_23_LaMedusaSmallHandbag-LaMedusaBag-versace-online-store_2_0.jpg?sw=748&sh=1050&sm=fit',}}/>
      <Text style={descrição}>Par de brincos Greca - R$ 2.087</Text>s<Image style={produtos} source={{ uri: 'https://cdn-images.farfetch-contents.com/15/36/28/98/15362898_27306922_1000.jpg',}}/>
      <Text style={descrição}>Sapato Medusa Aevitas com salto plataforma - R$ 6.960</Text>s<Image style={produtos} source={{ uri: 'https://cdn-images.farfetch-contents.com/17/32/18/48/17321848_36376061_600.jpg',}}/>
    </View>
    </ScrollView>
  );
}

function IMContatoScreen() {
  return (
    <ScrollView>
    <View style={fundoo}>
      <Text style={contato}>Entrar em contato</Text>
      <TextInput style={formulario} label="Nome"></TextInput>
      <TextInput style={formulario} label="Email"></TextInput>
      <TextInput style={formulario} label="Senha"></TextInput>
      <Button style={enviar} label="Enviar">Enviar</Button>
    </View>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Versace" component={IMHomeScreen} />
        <Tab.Screen name="História" component={IMHistóriaScreen} />
        <Tab.Screen name="Produtos" component={IMProdutosScreen} />
        <Tab.Screen name="Contato" component={IMContatoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const fundoo = {
    backgroundColor: "black",
    height: "2000px",
    display: "flex",
    alignItems: "center",
}
const foto = {
  height: "10%",
  width: "100%"
}
const anuncio = {
  height: "20%",
  width: "70%",
  backgroundColor: "white",
  borderRadius: "40px",
  borderStyle: "inset",
  borderWidth: "5px",
  borderColor: "#FFD700",

}
const slogan = {
  fontSize: "20px",
  textAlign: "center",
  backgroundColor: "black",
  color: "white",
}
const caixa = {
  marginTop: "30px",
  backgroundColor: "white",
  borderStyle: "inset",
  borderWidth: "5px",
  borderColor: "#FFD700",
  width: "80%",
  height: "45%", 
  padding: "25px", 
  fontSize: "20px",
  borderRadius: "10px",

}
const produtos = {
  height: "15%",
  width: "80%", 
  margin: "10px",
  borderRadius: "10px",
  borderStyle: "inset",
  borderWidth: "5px",
  borderColor: "#FFD700",
  
  
}
const fundo = {
  backgroundColor: "black",
  height: "3200px",
  padding: "30px",
  display: "flex",
  alignItems: "center",

  
}
const descrição = {
  color: "white",
  fontSize: "20px",
  margin: "10px",
  textAlign: "center",
  borderColor: "#FFD700",
  
}
const contato = {
  margin: "80px",
  color: "white",
  fontSize: "35px"
}
const formulario = {
  width: "300px",
  height: "50px",
  marginTop: "10px",
  borderStyle: "inset",
  borderWidth: "5px",
  borderColor: "#FFD700",
  textAlign: "center",
}
const enviar = {
  width: "300px",
  height: "40px",
  backgroundColor: "white",
  marginTop: "15px",
  padding: "3px",
}
const textinho = {
  fontSize: "18px",
  textAlign: "flex",
  color: "black",
  borderRadius: "30px",
}
const fototeca = {
  height: "10%",
  width: "100%",
  marginTop: "10px",
  borderStyle: "inset",
  borderRadius: "10px",
  borderWidth: "5px",
  
}
const fotuu = {
  height: "10%",
  width: "100%",
  marginTop: "10px",
  borderStyle: "inset",
  borderRadius: "10px",
  borderWidth: "5px",
  
}
const fota = {
  height: "10%",
  width: "100%",
  marginTop: "10px",
  borderStyle: "inset",
  borderRadius: "10px",
  borderWidth: "5px",
}