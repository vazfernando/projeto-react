import './App.css';
import {useState} from "react";
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import { Input } from 'antd';
import { Button, Radio } from 'antd';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import React from 'react';

const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
function App() {
    // Isso é o conjunto da variavel, o que chamamos de estados.. variavel nome eo metodo setName para popular a variavel.
    const [nome, setName] = useState(); // Hooks

    // Isso é uma função
    const populaNome = (event) => {
        setName(event.target.value);
    }

    const App: React.FC = () => {
        
    }

    const { Header, Footer, Sider, Content } = Layout;

    const { Step } = Steps;

    return (
        <div className='bigBody'>            
    
                    <section className='stepsBar'>
                        <section className='stepsBarElements'>
                            <Steps>
                                <Step status="process" title="ITEM 1" icon={<SolutionOutlined />} />
                                <Step status="process" title="ITEM 1" icon={<SolutionOutlined />} />
                                <Step status="process" title="ITEM 1" icon={<SolutionOutlined />} />
                                <Step status="process" title="ITEM 1" icon={<SolutionOutlined />} />
                                <Step status="process" title="ITEM 1" icon={<SolutionOutlined />} />
                                <Step status="process" title="ITEM 1" icon={<SolutionOutlined />} />
                                <Step status="process" title="ITEM 1" icon={<SolutionOutlined />} />
                                <Step status="process" title="ITEM 1" icon={<SolutionOutlined />} />
                                <Step status="process" title="ITEM 1" icon={<SolutionOutlined />} />
                            </Steps>
                        </section>
                    </section>
                    <section className='profileTrabalhador'>
                        
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat temporibus provident obcaecati. Provident asperiores odit qui fugit velit dolor aspernatur quo dolore est consequuntur incidunt, aliquam iure architecto, possimus commodity.
                        <UserOutlined />
                    </section>
                    <section className='coluna1'>
                    <p className='abaAzul'>Adicionar Funcionário </p>
                        <section className='coluna coluna2'>
                            <p>Nome</p>
                            <Input className='inputStyle'/>
                            <p>CPF</p>
                            <Input/>
                            <p>RG</p>
                            <Input/>
                            <p>Sexo</p>
                            <Radio value="sex" checked> Masculino</Radio>
                            <Radio value="sex"> Feminino</Radio>
                            <p>Data de Nascimento</p>
                            <Input/>
                            <p>Cargo</p>
                            <Input/>
                        </section>
                        <br></br>
                        <section className='coluna3'>
                            <p>Quais EPIs p trabalhador usa na atividade </p>
                            <p>
                            <Checkbox onChange={onChange}>O trabalhador não usa EPI.</Checkbox>
                            </p>
                            <p>Selecione Atividade</p>
                            <Input/>
                            <p>Selecione o EPI</p>
                            <Input/>
                            <p>Informe o número CA:</p>
                            <Input/>
                            <p>Adicionar EPI</p>
                            <Button>Adicionar outra atividade</Button>
                        </section>
                        <br></br>
                        <section className='coluna4'>
                            <p>Adicione Atestado de Saúde (ocupacional)</p>
                            <Input placeholder='Documento 1.png'></Input>
                            <Button>Selecionar Arquivo</Button>
                            <br></br><Button>Salvar</Button>
                        </section>
                    </section>
        </div>
    );
}

export default App;
