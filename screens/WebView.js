import { WebView } from 'react-native-webview';

const WebView = () => {
  return (
    <WebView source={{ uri: 'http://www.naver.com' }} style={{ flex: 1 }} />
  );
};

export default WebView;
