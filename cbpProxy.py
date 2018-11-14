r = requests.get('http://apps.cbp.gov/bwt/bwt.xml')
return r.text
