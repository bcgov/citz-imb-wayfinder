/* eslint-disable max-len */
import { useState } from 'react';
import { Button } from '../../components/Button/Button';
import { StyledContainer, StyledOuterDiv, StyledFieldSetDiv } from './eula.styles';

export type EulaProps = {
    eula: boolean,
    onEulaChange: (value:boolean) => void;
}

export default function Eula({
  eula,
  onEulaChange,
}: EulaProps) {
  const [isEulaConsentChecked, setIsEulaConsentChecked] = useState(false);

  const handleEulaCheckboxChange = (event: { target: { checked: true; }; }) => {
    setIsEulaConsentChecked(event.target.checked);
  };

  return (
    <StyledOuterDiv>
      <StyledContainer>
        <h1>EULA</h1>
        <br />
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit augue, varius at vestibulum at, elementum id urna. Donec odio erat, posuere vel mi ac, porttitor fermentum felis. Donec id leo sollicitudin, suscipit ante vel, tempus ligula. Aliquam vitae pretium magna. Suspendisse suscipit eget odio vel lacinia. Nam in mollis ligula, in interdum nibh. Suspendisse vitae risus mi. Praesent ut sem tincidunt, rutrum ante at, commodo ante. Nullam elementum risus sed placerat tincidunt. Curabitur euismod sit amet quam id luctus. Cras a hendrerit nisi. Cras id aliquet massa, id malesuada lacus. Praesent in turpis risus. In dui quam, ultrices vitae metus quis, hendrerit porta mauris. Sed eget purus non eros ullamcorper porttitor. Sed laoreet ante sed turpis pulvinar tempus. Praesent eget feugiat leo. Ut quis finibus nisl. Fusce blandit mattis risus, ut sollicitudin orci. Pellentesque lacinia ex eu nisi faucibus euismod. Vivamus suscipit, elit non suscipit suscipit, tortor augue hendrerit ex, sit amet rhoncus libero justo nec mauris. Sed facilisis nunc augue, non scelerisque diam convallis nec. Aenean quis nulla vehicula, vestibulum nisi sit amet, mattis orci. Nullam hendrerit pharetra arcu, a scelerisque lacus molestie vel. Quisque viverra, nunc id fringilla aliquam, justo nunc aliquam risus, quis ornare dolor sapien nec ante. Suspendisse in elementum nisi. Mauris interdum enim in odio laoreet, at dapibus leo fringilla. Nam hendrerit rutrum risus ac consectetur. Nullam pellentesque, risus sit amet viverra laoreet, lectus justo faucibus leo, ut tincidunt turpis purus eget libero. Quisque a ex nec libero lacinia dignissim. Curabitur ornare dictum dictum. Ut nec lectus risus. Vivamus purus urna, cursus molestie auctor non, sodales rhoncus magna. Aliquam lacinia ligula nibh, a dignissim neque efficitur eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet tortor nec felis posuere fringilla. Etiam in bibendum magna, sed condimentum justo. Mauris sed laoreet felis. Donec ullamcorper odio non luctus auctor. </p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit augue, varius at vestibulum at, elementum id urna. Donec odio erat, posuere vel mi ac, porttitor fermentum felis. Donec id leo sollicitudin, suscipit ante vel, tempus ligula. Aliquam vitae pretium magna. Suspendisse suscipit eget odio vel lacinia. Nam in mollis ligula, in interdum nibh. Suspendisse vitae risus mi. Praesent ut sem tincidunt, rutrum ante at, commodo ante. Nullam elementum risus sed placerat tincidunt. Curabitur euismod sit amet quam id luctus. Cras a hendrerit nisi. Cras id aliquet massa, id malesuada lacus. Praesent in turpis risus. In dui quam, ultrices vitae metus quis, hendrerit porta mauris. Sed eget purus non eros ullamcorper porttitor. Sed laoreet ante sed turpis pulvinar tempus. Praesent eget feugiat leo. Ut quis finibus nisl. Fusce blandit mattis risus, ut sollicitudin orci. Pellentesque lacinia ex eu nisi faucibus euismod. Vivamus suscipit, elit non suscipit suscipit, tortor augue hendrerit ex, sit amet rhoncus libero justo nec mauris. Sed facilisis nunc augue, non scelerisque diam convallis nec. Aenean quis nulla vehicula, vestibulum nisi sit amet, mattis orci. Nullam hendrerit pharetra arcu, a scelerisque lacus molestie vel. Quisque viverra, nunc id fringilla aliquam, justo nunc aliquam risus, quis ornare dolor sapien nec ante. Suspendisse in elementum nisi. Mauris interdum enim in odio laoreet, at dapibus leo fringilla. Nam hendrerit rutrum risus ac consectetur. Nullam pellentesque, risus sit amet viverra laoreet, lectus justo faucibus leo, ut tincidunt turpis purus eget libero. Quisque a ex nec libero lacinia dignissim. Curabitur ornare dictum dictum. Ut nec lectus risus. Vivamus purus urna, cursus molestie auctor non, sodales rhoncus magna. Aliquam lacinia ligula nibh, a dignissim neque efficitur eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet tortor nec felis posuere fringilla. Etiam in bibendum magna, sed condimentum justo. Mauris sed laoreet felis. Donec ullamcorper odio non luctus auctor. </p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit augue, varius at vestibulum at, elementum id urna. Donec odio erat, posuere vel mi ac, porttitor fermentum felis. Donec id leo sollicitudin, suscipit ante vel, tempus ligula. Aliquam vitae pretium magna. Suspendisse suscipit eget odio vel lacinia. Nam in mollis ligula, in interdum nibh. Suspendisse vitae risus mi. Praesent ut sem tincidunt, rutrum ante at, commodo ante. Nullam elementum risus sed placerat tincidunt. Curabitur euismod sit amet quam id luctus. Cras a hendrerit nisi. Cras id aliquet massa, id malesuada lacus. Praesent in turpis risus. In dui quam, ultrices vitae metus quis, hendrerit porta mauris. Sed eget purus non eros ullamcorper porttitor. Sed laoreet ante sed turpis pulvinar tempus. Praesent eget feugiat leo. Ut quis finibus nisl. Fusce blandit mattis risus, ut sollicitudin orci. Pellentesque lacinia ex eu nisi faucibus euismod. Vivamus suscipit, elit non suscipit suscipit, tortor augue hendrerit ex, sit amet rhoncus libero justo nec mauris. Sed facilisis nunc augue, non scelerisque diam convallis nec. Aenean quis nulla vehicula, vestibulum nisi sit amet, mattis orci. Nullam hendrerit pharetra arcu, a scelerisque lacus molestie vel. Quisque viverra, nunc id fringilla aliquam, justo nunc aliquam risus, quis ornare dolor sapien nec ante. Suspendisse in elementum nisi. Mauris interdum enim in odio laoreet, at dapibus leo fringilla. Nam hendrerit rutrum risus ac consectetur. Nullam pellentesque, risus sit amet viverra laoreet, lectus justo faucibus leo, ut tincidunt turpis purus eget libero. Quisque a ex nec libero lacinia dignissim. Curabitur ornare dictum dictum. Ut nec lectus risus. Vivamus purus urna, cursus molestie auctor non, sodales rhoncus magna. Aliquam lacinia ligula nibh, a dignissim neque efficitur eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet tortor nec felis posuere fringilla. Etiam in bibendum magna, sed condimentum justo. Mauris sed laoreet felis. Donec ullamcorper odio non luctus auctor. </p>
        <fieldset>
          <legend>If you agree to the previous terms, check the box below and click the agree button</legend>
          <StyledFieldSetDiv>
            <center>
              <input
                type="checkbox"
                id="eulaAgree"
                name="eulaAgreeCheckbox"
                onChange={() => handleEulaCheckboxChange}
                checked={eula}
              />
              <Button
                handleClick={() => onEulaChange(true)}
                variant="primary"
                size="md"
                disabled={!isEulaConsentChecked}
                text="Submit"
              />
            </center>
          </StyledFieldSetDiv>
        </fieldset>
      </StyledContainer>
    </StyledOuterDiv>
  );
}

// outer div 100%/100%, build inside that
