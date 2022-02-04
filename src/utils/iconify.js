import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import HealthAndSafetyTwoToneIcon from '@mui/icons-material/HealthAndSafetyTwoTone';
import ElectricalServicesTwoToneIcon from '@mui/icons-material/ElectricalServicesTwoTone';
import MapsHomeWorkTwoToneIcon from '@mui/icons-material/MapsHomeWorkTwoTone';
import TravelExploreTwoToneIcon from '@mui/icons-material/TravelExploreTwoTone';
import FastfoodTwoToneIcon from '@mui/icons-material/FastfoodTwoTone';
import CommuteTwoToneIcon from '@mui/icons-material/CommuteTwoTone';
import { GiPayMoney } from 'react-icons/gi';

const iconify = (name) => {
  switch (name) {
    case 'Rent or Lease': return <MapsHomeWorkTwoToneIcon fontSize="large" />;
    case 'Food and Drinks': return <FastfoodTwoToneIcon fontSize="large" />;
    case 'Shopping': return <ShoppingCartTwoToneIcon fontSize="large" />;
    case 'Healthcare': return <HealthAndSafetyTwoToneIcon fontSize="large" />;
    case 'Utilities': return <ElectricalServicesTwoToneIcon fontSize="large" />;
    case 'Transport': return <CommuteTwoToneIcon fontSize="large" />;
    case 'Vacation': return <TravelExploreTwoToneIcon fontSize="large" />;
    default: return <GiPayMoney />;
  }
};

export default iconify;
