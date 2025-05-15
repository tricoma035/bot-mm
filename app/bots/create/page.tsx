import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Code, Database, FileText, Upload, Zap } from "lucide-react"
import Link from "next/link"
import DashboardNav from "@/components/dashboard-nav"

export default function CreateBot() {
  return (
    <div className="min-h-screen bg-black text-white">
      <DashboardNav />

      <main className="container mx-auto py-6 px-4 md:px-6">
        <div className="mb-8">
          <Link href="/bots" className="text-gray-400 hover:text-green-500 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" /> Volver a Bots
          </Link>
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Crear Nuevo Bot</h1>
          <p className="text-gray-400 mb-8">
            Configura y despliega un nuevo bot de IA para tus necesidades específicas.
          </p>

          <Tabs defaultValue="basic" className="mb-8">
            <TabsList className="bg-gray-900 border border-green-900/40 mb-6">
              <TabsTrigger
                value="basic"
                className="data-[state=active]:bg-green-900/20 data-[state=active]:text-green-500"
              >
                Información Básica
              </TabsTrigger>
              <TabsTrigger
                value="capabilities"
                className="data-[state=active]:bg-green-900/20 data-[state=active]:text-green-500"
              >
                Capacidades
              </TabsTrigger>
              <TabsTrigger
                value="training"
                className="data-[state=active]:bg-green-900/20 data-[state=active]:text-green-500"
              >
                Entrenamiento
              </TabsTrigger>
              <TabsTrigger
                value="deployment"
                className="data-[state=active]:bg-green-900/20 data-[state=active]:text-green-500"
              >
                Despliegue
              </TabsTrigger>
            </TabsList>

            <TabsContent value="basic">
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="bg-gray-900 border-green-900/40">
                  <CardHeader>
                    <CardTitle>Información del Bot</CardTitle>
                    <CardDescription className="text-gray-400">Información básica sobre tu bot de IA.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="bot-name">Nombre del Bot</Label>
                      <Input
                        id="bot-name"
                        placeholder="ej., ProcesadorDatos-1"
                        className="bg-black border-green-900/40 focus:border-green-500/40 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bot-type">Tipo de Bot</Label>
                      <Select>
                        <SelectTrigger className="bg-black border-green-900/40 focus:border-green-500/40 text-white">
                          <SelectValue placeholder="Selecciona tipo de bot" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-green-900/40 text-white">
                          <SelectItem value="data">Procesamiento de Datos</SelectItem>
                          <SelectItem value="text">Análisis de Texto</SelectItem>
                          <SelectItem value="image">Generación de Imágenes</SelectItem>
                          <SelectItem value="code">Generación de Código</SelectItem>
                          <SelectItem value="audio">Procesamiento de Audio</SelectItem>
                          <SelectItem value="custom">Personalizado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Descripción</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe lo que hace tu bot..."
                        className="bg-black border-green-900/40 focus:border-green-500/40 text-white min-h-[120px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="model">Modelo Base</Label>
                      <Select>
                        <SelectTrigger className="bg-black border-green-900/40 focus:border-green-500/40 text-white">
                          <SelectValue placeholder="Selecciona modelo base" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-green-900/40 text-white">
                          <SelectItem value="botmm-1">BotMM-1 (Propósito General)</SelectItem>
                          <SelectItem value="botmm-2">BotMM-2 (Avanzado)</SelectItem>
                          <SelectItem value="botmm-data">BotMM-Data (Especializado en Datos)</SelectItem>
                          <SelectItem value="botmm-code">BotMM-Code (Especializado en Código)</SelectItem>
                          <SelectItem value="custom">Modelo Personalizado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-green-900/40">
                  <CardHeader>
                    <CardTitle>Configuración</CardTitle>
                    <CardDescription className="text-gray-400">
                      Configura el comportamiento y ajustes de tu bot.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="max-tokens">Tokens Máximos</Label>
                      <Input
                        id="max-tokens"
                        type="number"
                        placeholder="ej., 2048"
                        className="bg-black border-green-900/40 focus:border-green-500/40 text-white"
                      />
                      <p className="text-xs text-gray-400">
                        Número máximo de tokens que el bot puede procesar en una sola petición.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="temperature">Temperatura</Label>
                      <Input id="temperature" type="range" min="0" max="1" step="0.1" className="accent-green-500" />
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Preciso (0)</span>
                        <span>Creativo (1)</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="streaming" className="flex-1">
                          Habilitar Streaming
                        </Label>
                        <Switch id="streaming" defaultChecked />
                      </div>
                      <p className="text-xs text-gray-400 mt-2">
                        Transmitir respuestas en tiempo real en lugar de esperar respuestas completas.
                      </p>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="logging" className="flex-1">
                          Habilitar Registro
                        </Label>
                        <Switch id="logging" defaultChecked />
                      </div>
                      <p className="text-xs text-gray-400 mt-2">
                        Registrar todas las peticiones y respuestas para monitorización y depuración.
                      </p>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="rate-limit" className="flex-1">
                          Límite de Tasa
                        </Label>
                        <Switch id="rate-limit" />
                      </div>
                      <p className="text-xs text-gray-400 mt-2">
                        Limitar el número de peticiones que este bot puede procesar por minuto.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="capabilities">
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="bg-gray-900 border-green-900/40">
                  <CardHeader>
                    <CardTitle>Capacidades del Bot</CardTitle>
                    <CardDescription className="text-gray-400">Define lo que tu bot puede hacer.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="bg-green-900/20 p-2 rounded-full">
                            <FileText className="h-4 w-4 text-green-500" />
                          </div>
                          <div>
                            <Label className="font-medium">Procesamiento de Texto</Label>
                            <p className="text-xs text-gray-400">Procesar y analizar datos de texto</p>
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="bg-green-900/20 p-2 rounded-full">
                            <Code className="h-4 w-4 text-green-500" />
                          </div>
                          <div>
                            <Label className="font-medium">Generación de Código</Label>
                            <p className="text-xs text-gray-400">Generar y analizar código</p>
                          </div>
                        </div>
                        <Switch />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="bg-green-900/20 p-2 rounded-full">
                            <Database className="h-4 w-4 text-green-500" />
                          </div>
                          <div>
                            <Label className="font-medium">Procesamiento de Datos</Label>
                            <p className="text-xs text-gray-400">Procesar y analizar datos estructurados</p>
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="bg-green-900/20 p-2 rounded-full">
                            <Upload className="h-4 w-4 text-green-500" />
                          </div>
                          <div>
                            <Label className="font-medium">Manejo de Archivos</Label>
                            <p className="text-xs text-gray-400">Procesar y analizar archivos</p>
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>

                    <div className="pt-4">
                      <Label htmlFor="max-file-size">Tamaño Máximo de Archivo</Label>
                      <Select>
                        <SelectTrigger className="bg-black border-green-900/40 focus:border-green-500/40 text-white mt-2">
                          <SelectValue placeholder="Selecciona tamaño máximo de archivo" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-green-900/40 text-white">
                          <SelectItem value="10mb">10 MB</SelectItem>
                          <SelectItem value="50mb">50 MB</SelectItem>
                          <SelectItem value="100mb">100 MB</SelectItem>
                          <SelectItem value="500mb">500 MB</SelectItem>
                          <SelectItem value="1gb">1 GB</SelectItem>
                          <SelectItem value="unlimited">Ilimitado</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-gray-400 mt-2">Tamaño máximo de archivo que el bot puede procesar.</p>
                    </div>

                    <div className="pt-4">
                      <Label htmlFor="supported-formats">Formatos de Archivo Soportados</Label>
                      <Textarea
                        id="supported-formats"
                        placeholder="ej., .txt, .csv, .json, .pdf"
                        className="bg-black border-green-900/40 focus:border-green-500/40 text-white mt-2 min-h-[80px]"
                      />
                      <p className="text-xs text-gray-400 mt-2">
                        Lista separada por comas de formatos de archivo que el bot puede procesar.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-green-900/40">
                  <CardHeader>
                    <CardTitle>Capacidades Avanzadas</CardTitle>
                    <CardDescription className="text-gray-400">
                      Configura características avanzadas para tu bot.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="system-prompt">Prompt del Sistema</Label>
                      <Textarea
                        id="system-prompt"
                        placeholder="Introduce instrucciones del sistema para tu bot..."
                        className="bg-black border-green-900/40 focus:border-green-500/40 text-white min-h-[120px]"
                      />
                      <p className="text-xs text-gray-400">
                        Instrucciones que definen el comportamiento y capacidades de tu bot.
                      </p>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="memory" className="flex-1">
                          Memoria de Conversación
                        </Label>
                        <Switch id="memory" defaultChecked />
                      </div>
                      <p className="text-xs text-gray-400 mt-2">
                        Permite al bot recordar interacciones previas en una conversación.
                      </p>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="tools" className="flex-1">
                          Acceso a Herramientas Externas
                        </Label>
                        <Switch id="tools" />
                      </div>
                      <p className="text-xs text-gray-400 mt-2">Permite al bot usar herramientas y APIs externas.</p>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="web-search" className="flex-1">
                          Búsqueda Web
                        </Label>
                        <Switch id="web-search" />
                      </div>
                      <p className="text-xs text-gray-400 mt-2">Permite al bot buscar información en la web.</p>
                    </div>

                    <div className="pt-4">
                      <Label htmlFor="custom-functions">Funciones Personalizadas</Label>
                      <Textarea
                        id="custom-functions"
                        placeholder="Define funciones personalizadas en formato JSON..."
                        className="bg-black border-green-900/40 focus:border-green-500/40 text-white mt-2 min-h-[120px] font-mono text-sm"
                      />
                      <p className="text-xs text-gray-400 mt-2">
                        Define funciones personalizadas que tu bot puede llamar.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="training">
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="bg-gray-900 border-green-900/40">
                  <CardHeader>
                    <CardTitle>Datos de Entrenamiento</CardTitle>
                    <CardDescription className="text-gray-400">Proporciona datos para entrenar tu bot.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="border-2 border-dashed border-green-900/40 rounded-lg p-6 text-center hover:border-green-500/40 transition-all cursor-pointer">
                      <Upload className="h-8 w-8 text-green-500 mx-auto mb-4" />
                      <h3 className="font-medium mb-2">Subir Datos de Entrenamiento</h3>
                      <p className="text-sm text-gray-400 mb-4">Arrastra y suelta archivos o haz clic para explorar</p>
                      <Button
                        variant="outline"
                        className="border-green-900/40 hover:border-green-500/40 hover:bg-green-900/10 text-green-500"
                      >
                        Seleccionar Archivos
                      </Button>
                      <p className="text-xs text-gray-400 mt-4">
                        Formatos soportados: .txt, .csv, .json, .pdf, .zip (máx 1GB)
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="data-source">URL de Fuente de Datos</Label>
                      <Input
                        id="data-source"
                        placeholder="https://ejemplo.com/datos.json"
                        className="bg-black border-green-900/40 focus:border-green-500/40 text-white"
                      />
                      <p className="text-xs text-gray-400">URL a una fuente de datos para entrenar tu bot.</p>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="continuous-learning" className="flex-1">
                          Aprendizaje Continuo
                        </Label>
                        <Switch id="continuous-learning" />
                      </div>
                      <p className="text-xs text-gray-400 mt-2">
                        Permite al bot aprender de nuevas interacciones con el tiempo.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-green-900/40">
                  <CardHeader>
                    <CardTitle>Configuración de Entrenamiento</CardTitle>
                    <CardDescription className="text-gray-400">Configura cómo se entrenará tu bot.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="training-epochs">Épocas de Entrenamiento</Label>
                      <Input
                        id="training-epochs"
                        type="number"
                        placeholder="ej., 3"
                        className="bg-black border-green-900/40 focus:border-green-500/40 text-white"
                      />
                      <p className="text-xs text-gray-400">
                        Número de épocas de entrenamiento. Valores más altos pueden mejorar el rendimiento pero tardan
                        más.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="learning-rate">Tasa de Aprendizaje</Label>
                      <Input
                        id="learning-rate"
                        type="number"
                        placeholder="ej., 0,0001"
                        className="bg-black border-green-900/40 focus:border-green-500/40 text-white"
                      />
                      <p className="text-xs text-gray-400">
                        Tasa de aprendizaje para el entrenamiento. Valores más bajos son más estables pero entrenan más
                        lento.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="training-method">Método de Entrenamiento</Label>
                      <Select>
                        <SelectTrigger className="bg-black border-green-900/40 focus:border-green-500/40 text-white">
                          <SelectValue placeholder="Selecciona método de entrenamiento" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-green-900/40 text-white">
                          <SelectItem value="fine-tuning">Ajuste Fino</SelectItem>
                          <SelectItem value="rlhf">Aprendizaje por Refuerzo con Feedback Humano</SelectItem>
                          <SelectItem value="few-shot">Aprendizaje con Pocos Ejemplos</SelectItem>
                          <SelectItem value="zero-shot">Aprendizaje sin Ejemplos</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-gray-400">Método utilizado para entrenar tu bot.</p>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="advanced-training" className="flex-1">
                          Opciones Avanzadas de Entrenamiento
                        </Label>
                        <Switch id="advanced-training" />
                      </div>
                      <p className="text-xs text-gray-400 mt-2">
                        Habilita opciones avanzadas de entrenamiento para más control.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="deployment">
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="bg-gray-900 border-green-900/40">
                  <CardHeader>
                    <CardTitle>Opciones de Despliegue</CardTitle>
                    <CardDescription className="text-gray-400">Configura cómo se desplegará tu bot.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="deployment-environment">Entorno de Despliegue</Label>
                      <Select>
                        <SelectTrigger className="bg-black border-green-900/40 focus:border-green-500/40 text-white">
                          <SelectValue placeholder="Selecciona entorno" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-green-900/40 text-white">
                          <SelectItem value="production">Producción</SelectItem>
                          <SelectItem value="staging">Preproducción</SelectItem>
                          <SelectItem value="development">Desarrollo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="scaling">Escalado</Label>
                      <Select>
                        <SelectTrigger className="bg-black border-green-900/40 focus:border-green-500/40 text-white">
                          <SelectValue placeholder="Selecciona opción de escalado" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-green-900/40 text-white">
                          <SelectItem value="auto">Auto-escalado</SelectItem>
                          <SelectItem value="fixed">Instancias Fijas</SelectItem>
                          <SelectItem value="manual">Escalado Manual</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="instances">Número de Instancias</Label>
                      <Input
                        id="instances"
                        type="number"
                        placeholder="ej., 3"
                        className="bg-black border-green-900/40 focus:border-green-500/40 text-white"
                      />
                      <p className="text-xs text-gray-400">Número de instancias a desplegar (para escalado fijo).</p>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="auto-deploy" className="flex-1">
                          Auto-desplegar Actualizaciones
                        </Label>
                        <Switch id="auto-deploy" defaultChecked />
                      </div>
                      <p className="text-xs text-gray-400 mt-2">
                        Desplegar automáticamente actualizaciones cuando se modifique el bot.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-green-900/40">
                  <CardHeader>
                    <CardTitle>Control de Acceso</CardTitle>
                    <CardDescription className="text-gray-400">Configura quién puede acceder a tu bot.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="access-level">Nivel de Acceso</Label>
                      <Select>
                        <SelectTrigger className="bg-black border-green-900/40 focus:border-green-500/40 text-white">
                          <SelectValue placeholder="Selecciona nivel de acceso" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-green-900/40 text-white">
                          <SelectItem value="public">Público</SelectItem>
                          <SelectItem value="private">Privado</SelectItem>
                          <SelectItem value="restricted">Restringido</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="api-auth">Autenticación API</Label>
                      <Select>
                        <SelectTrigger className="bg-black border-green-900/40 focus:border-green-500/40 text-white">
                          <SelectValue placeholder="Selecciona método de autenticación" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-green-900/40 text-white">
                          <SelectItem value="api-key">Clave API</SelectItem>
                          <SelectItem value="oauth">OAuth</SelectItem>
                          <SelectItem value="jwt">JWT</SelectItem>
                          <SelectItem value="none">Ninguno</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="rate-limiting" className="flex-1">
                          Límite de Tasa
                        </Label>
                        <Switch id="rate-limiting" defaultChecked />
                      </div>
                      <p className="text-xs text-gray-400 mt-2">Limitar el número de peticiones por clave API.</p>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="ip-restrictions" className="flex-1">
                          Restricciones IP
                        </Label>
                        <Switch id="ip-restrictions" />
                      </div>
                      <p className="text-xs text-gray-400 mt-2">Restringir acceso a direcciones IP específicas.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-4 mt-6">
            <Button
              variant="outline"
              className="border-green-900/40 hover:border-green-500/40 hover:bg-green-900/10 text-white"
            >
              Guardar como Borrador
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-black">
              <Zap className="mr-2 h-4 w-4" /> Crear y Desplegar Bot
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
