import { createProdMockServer } from 'vite-plugin-mock/client'
import userMockFn from '../mock/user'
import homeMockFn from '../mock/home'

export async function setupProdMockServer() {
  const mockModules = [...userMockFn(), ...homeMockFn()]
  createProdMockServer(mockModules)
}
