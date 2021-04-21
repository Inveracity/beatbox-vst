Content.makeFrontInterface(600, 400);
const var hihat_close = 30;
const var hihat_open = 34;
const var evtList = [];
evtList.reserve(64);
function onNoteOn() {
    if(Message.getNoteNumber() == hihat_close) {
        local decayValue = 30;

        if(decayValue == 0) {
            for(eventId in evtList) {
                Synth.noteOffByEventId(eventId);
            }
        }

        else{
            for(eventId in evtList) {
                Synth.addVolumeFade(eventId, decayValue, -100);
            }
        }

        evtList.clear();
    }

    else if (Message.getNoteNumber() == hihat_open) {
        Message.makeArtificial();
        evtList.push(Message.getEventId());
    }
}function onNoteOff()
{
    if(Message.getNoteNumber() == hihat_open)
    {
        // We need to ignore the note-off message
        // for the open hi-hat so it will keep ringing...
        Message.ignoreEvent(true);
    }
}
function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 