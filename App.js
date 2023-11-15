import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';
import { RootNavigation } from './src/navigations/RootNavigation';

export default function App() {
  return (
    <RecoilRoot>
      <SafeAreaProvider>
          <NavigationContainer>
            <RootNavigation/>
          </NavigationContainer>
      </SafeAreaProvider>
    </RecoilRoot>
  );
}