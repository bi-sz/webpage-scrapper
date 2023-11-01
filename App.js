import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from './src/components/Header/Header';
import { HeaderWithoutCompound } from './src/components/HeaderWithoutCompound';
import { HeaderGroup } from './src/components/Header/HeaderGroup';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{flex:1, }}>
        {/* <HeaderWithoutCompound title ='HEDER' /> */}
        <Header>
          <HeaderGroup>
            <Header.Icon iconName='arrow-back'></Header.Icon>
            <Header.Title title='HEADER'></Header.Title>
          </HeaderGroup>

          <Header.Icon iconName='close'></Header.Icon>
        </Header>
      </View>
    </SafeAreaProvider>
  );
}
