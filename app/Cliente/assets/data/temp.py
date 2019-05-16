import json

def in30Min():
  horas = []
  for i in range(10, 18 + 1):
    horas.append(f'{i}h00')
    horas.append(f'{i}h30')

  final = []
  for i in range(1, len(horas)):
    dic = {}
    dic['key'] = str(i + 1)
    hora1 = horas[i - 1]
    hora2 = horas[i]
    dic['hora'] = f'{hora1} a {hora2}'
    final.append(dic)

  f = open('resultado.json', 'w')
  f.write(json.dumps(final, indent=4))
  f.close() 

def in1Hora():
  horas = []
  for i in range(10, 18 + 1):
    horas.append(f'{i}h00')

  final = []
  for i in range(1, len(horas)):
    dic = {}
    dic['key'] = str(i)
    hora1 = horas[i - 1]
    hora2 = horas[i]
    dic['hora'] = f'{hora1} a {hora2}'
    final.append(dic)

  f = open('resultado.json', 'w')
  f.write(json.dumps(final, indent=4))
  f.close() 

in1Hora()
