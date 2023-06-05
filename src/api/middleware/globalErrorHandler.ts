import { Request, Response, NextFunction } from 'express';
/**
 * PURPOSE: Global Error Handler is in place to give more meaningful communication with
 *          the user if something in the application goes wrong
 */

type Props = {
  req: Request;
  res: Response;
  next: NextFunction;
}

const globalErrorHandler = ({
  res,
  next,
}: Props) => {
  res.status(500).json({
    message: 'Internal Server Error',
  });
  next();
};

export default globalErrorHandler;
