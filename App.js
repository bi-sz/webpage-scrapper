import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from './src/components/Header/Header';
import { HookTestComponet } from './src/components/HookTestComponent';
import { useCallback, useState } from 'react';
import { Typography } from './src/components/Typography';
import { Button } from './src/components/Button';

export default function App() {

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const doSum = useCallback(() =>{
    return ( a + b )
  }, [a, b])

  return (
    <SafeAreaProvider>
      <View style={{flex:1 }}>
        <Header>
          <Header.Title title='HEADER' ></Header.Title>
        </Header>

        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <HookTestComponet a={a} b={b}></HookTestComponet>

          <Typography>현재 callback 으로 계산된 값 : {doSum()}</Typography>

          <Button onPress={()=>{
            console.log('press'),
            setA(a+1)
          }}>
            <Typography>A 더하기</Typography>
          </Button>
        </View>

      </View>
    </SafeAreaProvider>
  );
}
