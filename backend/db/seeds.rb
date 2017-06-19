ruby_quiz = Quiz.create!(name: "Ruby")
javascript_quiz = Quiz.create!(name: "Javascript")
questions = ruby_quiz.questions.create([ {content: "Get the last element from the 'bonestorm' string.", language_id: 1},
  {content: "a = 'Homer'\nb = ' Simpson'\nWhat does this expression evaluate to?\na + b", language_id: 1},
  {content: "What does the following expression evaluate to?\n3 / 2", language_id: 1},
  {content:"What does the following code print?\n
class Homer\n
  DOH = self\n
end\n
p Homer::DOH", language_id: 1}, {content: "the_simpsons = {\n
  :homer => {\n
    :attributes => {\n
      :age => 39,\n
      :hair_color => :bald\n
    },\n
    :occupation => 'Nuclear Safety Inspector'\n
  },\n
  :marge => {\n
    :attributes => {\n
      :age => 36,\n
      :hair_color => :blue\n
    },\n
    :occupation => 'Housewife'\n
  },\n
  :ned => {\n
    :attributes => {\n
      :age => 60,\n
      :hair_color => :brown\n
    },\n
    :occupation => ['Owner of Leftorium', 'Owner of FlanCrest Enterprises', 'Volunteer Soup Kitchen worker']\n
  }\n
}\n Return the 2nd occupation of Ned in the_simpsons hash", language_id: 1}, {content:"class Wisdom\n
  def name\n
    'Homer'\n
  end\n
end\n\n

class Wisdom\n
  def quote\n
    '# {name} says: Stupid risks make life worth living'\n
  end\n
end\n\n

Homer = Wisdom.new\n
p Homer.quote\n
What does the following code print?", language_id: 1},
{content: "A farmer had 752 sheep and took one shot that got them all. How did he do it?", language_id: 1}
])
javascript_quiz.questions.create([
  {content: "What does the following expression return?\n 7/ 'ghost'", language_id: 2},
  {content: "What does the following expression return?\n var zombie;\n zombie === undefined", language_id: 2},
  {content: "What is the value of the spooky variable in the following expression?\n var spooky;", language_id: 2},
  {content:
  "What does the following code print to the console?\n
  var theShining = {\n
    name: 'Johnny',\n
    JackTorrance: function () {\n
      return 'Heeeere’s ' + this.name + '!'\n
    }\n
  }\n
  theShining.JackTorrance();", language_id: 2},
  {content: "var halloween = {\n
    z: 'You know, it’s Halloween… everyone’s entitled to one good scare, eh?'\n
  }\n
  console.log(halloween.hasOwnProperty('z'));", language_id: 2},
  {content: "function aNightmareOnElmStreet() {\n
    this.self = function () {\n
      return this;\n
    }\n
  }\n
  freddyKreuger = new aNightmareOnElmStreet();\n
  console.log(freddyKreuger.self() === freddyKreuger);", language_id: 2},
  {content: "Is the sky blue?", language_id: 2}
])

answers = Answer.create([
  {content: "'bonestorm'[-1]", question_id: 1},
  {content: "'Homer Simpson'", question_id: 2},
  {content: "1", question_id: 3},
  {content: "Homer", question_id: 4},
  {content: "the_simpsons[:ned][:occupation][1]", question_id: 5},
  {content: "'Homer says: Stupid risks make life worth living'", question_id: 6},
  {content: "He took a panoramic view", question_id: 7},
  {content: "panoramic view", question_id: 7},
  {content: "panoramic", question_id: 7},
  {content: "NaN", question_id: 8},
  {content: "True", question_id: 9},
  {content: "Undefined", question_id: 10},
  {content: "'Heeeere’s Johnny!'", question_id: 11},
  {content: "True", question_id: 12},
  {content: "True", question_id: 13},
  {content: "No, it has no feelings", question_id: 14},
  {content: "No", question_id: 14}
])
