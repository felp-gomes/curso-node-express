import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import ErroBase from '../erros/ErroBase';
import RequisicaoIncorreta from '../erros/RequisicaoIncorreta';
import ErrorValidacao from '../erros/ErroValidacao';
import NaoEncontrado from '../erros/Naoencontrado';

function manipuladorErrors(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof mongoose.Error.CastError) {
    return new RequisicaoIncorreta().enviarResposta(res);
  } else if (error instanceof mongoose.Error.ValidationError) {
    return new ErrorValidacao(error).enviarResposta(res);
  } else if (error instanceof NaoEncontrado) {
    return error.enviarResposta(res);
  }
  new ErroBase().enviarResposta(res);
}

export default manipuladorErrors;
