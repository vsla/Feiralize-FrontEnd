import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

//recebe props desestruturado (children)
//recebe colors de quem o chamou
const GradientView = ({ colors, children }) => {
  const { gradientStyle } = styles;

  return (
    <LinearGradient colors={colors} style={gradientStyle} >
      {/* render its children*/ children}
    </LinearGradient>  
  );
};

const styles = {
  gradientStyle: {
    flex: 1
  }
};

export { GradientView };
