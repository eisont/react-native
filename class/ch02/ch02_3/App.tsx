// import React from 'react';
// import {SafeAreaView, Text} from 'react-native';

// const App = () => {
//   return (
//     <SafeAreaView>
//       <Text>{JSON.stringify('', null, 2)}</Text>
//     </SafeAreaView>
//   );
// };

// export default App;

// import React from 'react';
// import {SafeAreaView} from 'react-native';
// import ClassCompontent from './src/screens/ClassComponent';
// import ArrowComponent from './src/screens/ArrowComponent';
// import Person from './src/screens/Person';

// const App = () => {
//   return (
//     <SafeAreaView>
//       {/* 클래스 컴포넌트 실습 */}
//       <ClassCompontent />
//       {/* 함수형 컴포넌트 실습 */}
//       <ArrowComponent />
//       <Person person={person} />
//     </SafeAreaView>
//   );
// };

// export default App;

import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Person from './src/screens/Person';
import * as D from './src/data';

const people = D.makeArray(100).map(D.createRandomPerson);
const App = () => {
  const children = people.map(person => (
    <Person key={person.id} person={person} />
  ));

  return (
    <SafeAreaView>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default App;
