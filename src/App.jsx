// import { FaFontAwesome } from 'react-icons/fa';
// import{ Ionicons } from 'react-icons/io';
// import { MaterialDesign } from 'react-icons/md';
// import { Typicons } from 'react-icons/ti';
// import { GithubOctconsIcons } from 'react-icons/go';
// import { Feather } from 'react-icons/fi';
// import { GameIcons } from 'react-icons/gi';
// import { WeatherIcons } from 'react-icons/wi';
// import { Devicons } from 'react-icons/di';
// import { AmtDesignIcons} from 'react-icons/ai';
import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// import { AiOutlineMenu } from 'react-icons/ai';
// import { IconName } from "react-icons/fi";
// import { IconContext } from 'react-icons';

class Greeting extends React.Component {
  render() {
    return React.createElement('h1', null, `Hello, ${this.props.name}`);
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};

const Bare = () => {
  return (
    <div>
      <FaTwitter />
    </div>
  )
}

function HelloWorldComponent({ name }) {
  return (
    <div>Hello World, {name}</div>
  )
}


export default HelloWorldComponent;
