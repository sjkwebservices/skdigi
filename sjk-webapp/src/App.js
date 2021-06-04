import logo from './logo.svg';
import styles from './App.module.scss';

import {PrimaryButton} from '@fluentui/react';
import { Icon } from '@fluentui/react/lib/Icon';

//fluent components
import {BreadcrumbBasicExample} from './components/Breadcrumbs';


//all classes need to be replace by sass styles.className
function App() {
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <BreadcrumbBasicExample />
        <PrimaryButton text="welcome" />
        <Icon iconName="SharePointAppIcon16"/>
      </div>
    </div>
  );
}

export default App;
