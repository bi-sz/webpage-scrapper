import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from './src/components/Header/Header';
import { HookTestComponet } from './src/components/HookTestComponent';
import { useCallback, useState } from 'react';
import { Typography } from './src/components/Typography';
import { Button } from './src/components/Button';

export default function App() {

  return (
    <SafeAreaProvider>

    </SafeAreaProvider>
  );
}
