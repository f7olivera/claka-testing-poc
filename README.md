# Tabla de contenidos

- [Prerrequisitos](#prerrequisitos)
- [Setup](#setup)
- [Corriendo los tests](#corriendo-los-tests)

# Prerrequisitos

Seguir las instrucciones detalladas en [este video](https://www.youtube.com/watch?v=KN1sTvvX0mM) o bien en el [README.md](https://github.com/JoanEsquivel/appium-demo) del repositorio usado en esa demostración.

# Setup

1. Inicializar WebdriverIO con el siguiente comando:

```
npm init wdio .
```

Responder con las siguientes respuestas:
![wdio configuration wizard answers](https://github.com/f7olivera/claka-testing-poc/assets/81710086/4879fb7e-35c0-4285-826a-9f5280019beb)

2. Instalar las dependencias necesarias:

```
npm install @wdio/cucumber-framework @wdio/local-runner @wdio/appium-service @wdio/spec-reporter ts-node --save-dev
```

3. Actualizar las siguientes propiedades de `wdio.conf.ts`

- `capabilities`, para especificar el dispositivo sobre el que se van a correr los tests

```javascript
capabilities: [
  {
    // capabilities for local Appium web tests on an Android Emulator
    platformName: 'Android',
    browserName: 'Chrome',
    'appium:deviceName': 'nightwatch-android-11',
    'appium:platformVersion': '11.0',
    'appium:automationName': 'UiAutomator2',
  },
],
```

- `services`, para usar la instancia de appium instalada globalmente

```javascript
services: [
  [
    'appium',
    {
      command: 'appium',
    },
  ],
],
```

4. Correr `appium-installer` para comprobar que la configuración sea correcta

```
appium-installer
```

![image](https://github.com/f7olivera/claka-testing-poc/assets/81710086/cd33d0b3-7ab4-4db1-a2bd-10675b2d90b7)

# Corriendo los tests
Comando para correr los tests:
```
npm run wdio
```
