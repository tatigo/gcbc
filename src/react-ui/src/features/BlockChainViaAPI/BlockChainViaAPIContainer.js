import { connect } from 'react-redux';
import BlockChainViaAPI from './BlockChainViaAPI';
import * as actions from '../../redux/modules/blockChainAPI';

const mapStateToProps = ({ blockChainAPI }) => ({
  character: blockChainAPI.character,
  isFetching: blockChainAPI.isFetching,
  error: blockChainAPI.error
});

export default connect(mapStateToProps, actions)(BlockChainViaAPI);