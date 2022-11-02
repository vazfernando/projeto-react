import './App.css';
import React, {useEffect, useState} from "react";
import 'antd/dist/antd.css';
import {Button, Checkbox, Input, Radio, Steps} from 'antd';
import {SolutionOutlined, UserOutlined} from '@ant-design/icons';
import axios from "axios";

function App() {
    const [nome, setName] = useState();
    const [isAddFuncionario, setIsAddFuncionario] = useState(false);
    const [funcionarios, setFuncionarios] = useState([]);
    const [funcionario, setFuncionario] = useState({});

    useEffect(() => {
        buscarFuncionarios();
    }, [])

    const buscarFuncionarios = () => {
        axios.get('http://localhost:3000/funcionario').then((response) => {
            setFuncionarios(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }

    const salvarFuncionario = () => {
        axios.post('http://localhost:3000/funcionario', funcionario).then(() => {
            buscarFuncionarios();
            setFuncionario({});
        }).catch(function (error) {
            console.log(error);
        });
    }



    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const {Step} = Steps;

    return (
        <div className='bigBody'>

            <section className='stepsBar'>
                <section className='stepsBarElements'>
                    <Steps>
                        <Step status="process" title="ITEM 1" icon={<SolutionOutlined/>}/>
                        <Step status="process" title="ITEM 1" icon={<SolutionOutlined/>}/>
                        <Step status="process" title="ITEM 1" icon={<SolutionOutlined/>}/>
                        <Step status="process" title="ITEM 1" icon={<SolutionOutlined/>}/>
                        <Step status="process" title="ITEM 1" icon={<SolutionOutlined/>}/>
                        <Step status="process" title="ITEM 1" icon={<SolutionOutlined/>}/>
                        <Step status="process" title="ITEM 1" icon={<SolutionOutlined/>}/>
                        <Step status="process" title="ITEM 1" icon={<SolutionOutlined/>}/>
                        <Step status="process" title="ITEM 1" icon={<SolutionOutlined/>}/>
                    </Steps>
                </section>
            </section>
            <section className='profileTrabalhador'>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat temporibus provident obcaecati.
                Provident asperiores odit qui fugit velit dolor aspernatur quo dolore est consequuntur incidunt, aliquam
                iure architecto, possimus commodity.
                <UserOutlined/>
            </section>

            {!isAddFuncionario && <section className='coluna1'>
                <p className='abaAzul'>Funcionário (s) </p>
                <div className='col-sm-12 p-3'>
                    <button className='btn btn-outline-primary w-100' onClick={() => {
                        setIsAddFuncionario(true);
                    }}>Adicionar Funcionário
                    </button>
                </div>

                <div className='col-sm-12'>
                    {funcionarios.map((func) => {
                        return (
                            <div className='col-sm-12 p-3'>
                                <div className="card text-dark bg-info mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">{func.nome}</h5>
                                        <p className="card-text">
                                            <div className='col-sm-6 d-flex flex-row justify-content-between'>
                                                <span className="badge bg-light text-dark">{func.cpf}</span>
                                                <span className="badge bg-light text-dark">{func.dataNascimento}</span>
                                                <span className="badge bg-light text-dark">{func.cargo}</span>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>}

            {isAddFuncionario && <section className='coluna1'>
                <p className='abaAzul'>Adicionar Funcionário </p>
                <div className='p-3'>
                    <section className='coluna coluna2'>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <label>Nome</label>
                                <input value={funcionario?.nome} className='form-control' onChange={(e) => {
                                    setFuncionario(funcionario => ({...funcionario, nome: e.target.value }))
                                }}/>
                                <label>CPF</label>
                                <input value={funcionario?.cpf} className='form-control' onChange={(e) => {
                                    setFuncionario(funcionario => ({...funcionario, cpf: e.target.value }))
                                }}/>
                                <label>RG</label>
                                <input value={funcionario?.rg} className='form-control' onChange={(e) => {
                                    setFuncionario(funcionario => ({...funcionario, rg: e.target.value }))
                                }}/>
                            </div>

                            <div className='col-sm-6'>
                                <label>Sexo</label>
                                <Radio name={'sex'} value="M" checked> Masculino</Radio>
                                <Radio name={'sex'} value="F"> Feminino</Radio>
                                <label>Data de Nascimento</label>
                                <input className='form-control' onChange={(e) => {
                                    setFuncionario(funcionario => ({...funcionario, dataNascimento: e.target.value }))
                                }}/>
                                <label>Cargo</label>
                                <input className='form-control' onChange={(e) => {
                                    setFuncionario(funcionario => ({...funcionario, cargo: e.target.value }))
                                }}/>
                            </div>
                        </div>
                    </section>

                    <section className='coluna3 mt-2 p-2'>
                        <label className='fw-bold'>Quais EPIs p trabalhador usa na atividade </label>

                        <div>
                            <Checkbox onChange={onChange}>O trabalhador não usa EPI.</Checkbox>
                        </div>

                        <div className='col-sm-12'>
                            <div className='coluna4 row  ms-0 me-0 p-2'>
                                <div className='col-sm-12'>
                                    <p>Selecione Atividade</p>
                                    <Input className='form-control'/>
                                </div>

                                <div className='col-sm-4'>
                                    <p>Selecione o EPI</p>
                                    <Input className='form-control'/>
                                </div>

                                <div className='col-sm-4'>
                                    <p>Informe o número CA:</p>
                                    <Input className='form-control'/>
                                </div>

                                <div className='col-sm-4 d-flex align-items-end'>
                                    <button className='btn btn-outline-primary'>Adicionar EPI</button>
                                </div>
                            </div>
                        </div>

                        <Button className='btn btn-outline-primary w-100 mt-2 mb-2'>Adicionar outra atividade</Button>
                    </section>

                    <section className='coluna4 mt-2 mb-2 p-2'>
                        <label className='fw-bold'>Adicione Atestado de Saúde (ocupacional)</label>
                        <Input className='form-control' placeholder='Documento 1.png'></Input>
                        <Button className='btn btn-outline-primary w-100 mt-2 mb-2'>Selecionar Arquivo</Button>
                    </section>

                    <Button className='btn btn-outline-primary w-100 mt-2 mb-2' onClick={() => {
                        salvarFuncionario();
                        setIsAddFuncionario(false);
                    }}>Salvar</Button>
                </div>
            </section>}
        </div>
    );
}

export default App;
