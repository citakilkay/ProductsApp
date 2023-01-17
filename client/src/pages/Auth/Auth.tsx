import { Tabs, TabsProps } from 'antd';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import './auth.scss';

const Auth = () => {
    const onChange = (key: string) => {
        console.log(key);
    };
    const itemTabs : TabsProps['items'] = [
        {
            key: '1',
            label: 'Login',
            children:  (<div className='tab-content'><SignIn/></div>)
        },
        {
            key: '2',
            label: 'Register',
            children: (<div className='tab-content'><SignUp/></div>)
        }
    ]
    return (
        <>
        <div className='auth-page'>
            <Tabs centered defaultActiveKey="1" items={itemTabs} onChange={onChange} />
        </div>
        </>
    );
};

export default Auth;
